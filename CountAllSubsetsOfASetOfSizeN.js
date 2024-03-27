function count_all_subsets(n) {
    if(n === 0){
        return 1
    }
    return count_all_subsets(n-1) + count_all_subsets(n -1);
}