function soma(a,b){
    return a+b
}

test('5+5 deve retornar 10',()=>{
    expect(soma(5,5)).toBe(10)
})