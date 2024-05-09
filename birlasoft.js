    
{
    let mat1 = [[1, 2], [3, 4]]
    let mat2 = [[6, 1], [1, 89]]

    output = []

    function test(mat1, mat2) {

        for (let i = 0; i < mat1.length; i++) {
            const eli = mat1[i]

            for (let j = i; j < mat2.length; j++) {
                const elJ = mat2[j];
                console.log(eli, elJ);

                output.push(eli[i] + elJ[j])
                output.push(eli[0] + elJ[1])
                break
            }
            continue
        }

        return output
    }

    console.log(test(mat1, mat2))
}
