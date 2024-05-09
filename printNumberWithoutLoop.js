function withOutLoop(start, end) {
    console.log(start)
    if (start < end) {
        withOutLoop(start + 1, end)
    }
}

withOutLoop(1,10)