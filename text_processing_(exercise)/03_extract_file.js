function extractFile(input) {
    
    let splitted = input.split('\\');
    let fileNameAndExtension = splitted.pop();

    let splittedFileNameAndExtension = fileNameAndExtension.split('.');
    let extension = splittedFileNameAndExtension.pop();
    let fileName = splittedFileNameAndExtension.join('.');
    
    return `File name: ${fileName}\nFile extension: ${extension}`;
}

console.log(extractFile('C:\\Internal\\training-internal\\Template.pptx'));

console.log(extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs'));