function flipAndInvertImage(image: number[][]): number[][] {
    for(let img of image){
        let left = 0; 
        let right = img.length - 1; 
        
        while(right > left){
            [img[left], img[right]] = [img[right], img[left]]
            left++; 
            right--;
        }

        for(let i = 0; i < img.length; i++){
            if(img[i] === 0) img[i] = 1; 
            else img[i] = 0;
        }
    }
    
    return image;
};