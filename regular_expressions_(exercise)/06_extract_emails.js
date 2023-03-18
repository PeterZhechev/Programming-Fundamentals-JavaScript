function extractEmails(inputText) {
    
    let pattern = /^(?<user>[A-Za-z0-9]+[.\-_]*[A-Za-z0-9]+)@(?<host>[A-Za-z\-]+[.][A-Za-z\-]+[.A-Za-z\-]*)$\b/;
}

extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');


