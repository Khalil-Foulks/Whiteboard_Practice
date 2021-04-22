/**
    go through each string in array
    split string by spaces to grab int and domain
    go through domain part of string
    take full domain pair with int
    split anything after a period and create subdomain, pair with int
    continue until no more sub domains
    create total count of each domain 
    create new strings of "int domainName"
 */
    var subdomainVisits = function(cpdomains) {
        let visitCounts = {};
        
        for (let i = 0; i < cpdomains.length; i++) {
            // Split visits and domains by the space
            const [visits, domains] = cpdomains[i].split(" ");
            
            // Create array of subdomains in domain
            let subdomains = domains.split(".");
            
            while(subdomains.length) {
                // Join all items in subdomains array
                let subdomain = subdomains.join('.');
                
                // If subdomain already exists in object, add to existing count
                visitCounts[subdomain] = visitCounts.hasOwnProperty(subdomain) ?
                    Number(visitCounts[subdomain]) + Number(visits) :
                    visits;
                
                // Remove first subdomain from array
                subdomains.shift();
            }
        }
    
        return Object.keys(visitCounts).map((key) => `${visitCounts[key]} ${key}`);
    };
       