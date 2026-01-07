function destCity(paths: string[][]): string {
    const sources = new Set<string>();  
    const all_cities = new Set<string>(); 

    for(let [src, dest] of paths){
        sources.add(src);
        all_cities.add(src); 
        all_cities.add(dest);  
    }

    for(let city of all_cities){
        // console.log(typeof city, sources.has(city))
        if(!sources.has(city)) return city; 
    }

    return ""
};