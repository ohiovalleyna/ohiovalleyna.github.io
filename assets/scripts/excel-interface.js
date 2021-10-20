const readFile = file => {
    return new Promise((resolve, reject) => {
        var fr = new FileReader();
        fr.onload = () => {
            resolve(fr.result)
        };
        fr.onerror = reject;
        fr.readAsArrayBuffer(file);
    });
}

const getWorkbook = fileName => {
    if (localStorage.getItem(fileName)) {
        const cachedFile = JSON.parse(localStorage.getItem(fileName));
        const now = Date.now();
        // Expire cache every 5 minutes
        if (now - cachedFile.timestamp < 60 * 1000 * 5) {
            return Promise.resolve(cachedFile.workbook);
        }
        localStorage.removeItem(fileName);
    }
    return axios.get(fileName, {
            responseType: 'blob'
        })
        .then(res => readFile(res.data))
        .then(arrayBuffer => {
            let binary = "";
            const bytes = new Uint8Array(arrayBuffer);
            const length = bytes.byteLength;
            for (let i = 0; i < length; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            const workbook = XLSX.read(binary, {
                type: 'binary',
                cellDates: true,
                cellStyles: true
            });
            localStorage.setItem(fileName, JSON.stringify({
                workbook: workbook,
                timestamp: Date.now()
            }));
            return workbook
        });
}

export const getDataFromExcelSheet = (worksheetName, fileName) => {
    return getWorkbook(fileName)
        .then(workbook => XLSX.utils.sheet_to_json(workbook.Sheets[worksheetName]));
}   