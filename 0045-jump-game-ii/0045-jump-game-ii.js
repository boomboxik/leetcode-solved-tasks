function jump(nums) {
    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        // Находим самый дальний прыжок из текущей позиции
        farthest = Math.max(farthest, i + nums[i]);
        
        // Если мы достигли конца текущего диапазона прыжков
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
            
            // Если достигли или превзошли последний элемент
            if (currentEnd >= nums.length - 1) {
                break;
            }
        }
    }
    
    return jumps;
}