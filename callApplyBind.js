let f1 = {
    name: 'sumit',
    age: 12
}

let detail = function (state,town,area) {
    console.log(this.name + '  and age  ' + this.age,'live in '+state,town,area);
}

let f2 = {
    name: 'rahul',
    age: 14
}


detail.call(f2,'delhi','karolbagh','sec2')
detail.apply(f1,['delhi','karolbagh','sec2'])
let bind=detail.bind(f2,'delhi','karolbagh','sec2')
console.log(bind)
bind()