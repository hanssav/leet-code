function numUniqueEmails(emails: string[]): number {
    const sets = new Set(); 

    for(let email of emails){  
        let strs = email.split("@"); 
        // strs[0] = strs[0].split(".").join("")
        // strs[0] = strs[0].split("+")[0]

        // same way 
        strs[0] = strs[0].split("+")[0].replaceAll(".", "")

        sets.add(strs.join("@"))
    }

    return sets.size
};