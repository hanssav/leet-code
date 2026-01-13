function stableMountains(height: number[], threshold: number): number[] {
    const res: number[] = []
    for(let i = 0; i < height.length; i++){
        const prev = height[i - 1];
      
        if(prev > threshold) res.push(i);
    }
    return res;
};