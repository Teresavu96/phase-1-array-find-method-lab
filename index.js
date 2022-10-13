function superbowlWin(record){
    const winYear = record.find(e => e.result ==="W")
    if (winYear){
        return winYear.year
    }
}