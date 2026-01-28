function bagOfTokensScore(tokens: number[], power: number): number {
    let score = 0; 
    let maxScore = 0;
    let left = 0; 
    let right = tokens.length - 1; 

    tokens.sort((a, b) => a - b); 

    while(right >= left){
        if(power >= tokens[left]){
            power -= tokens[left];
            score++;
            left++;

            maxScore = Math.max(score, maxScore);
        } else if (right > left && score > 0){
            score--;
            power += tokens[right];
            right--;
        } else {
            break;
        }

    }


    return maxScore;
};