const {Observable}=require('rxjs');
const https=require('https')


const url='https://gitlab.com/api/v4/projects?search=${текст запроса}'


https.get(url,(res)=>{
    res.setEncoding('utf-8')
    res.on('data',(d)=>{
        console.log('Запрос получен!')
        var producer=(observer)=>{
            observer.next(d)
            observer.error()
            observer.complete()
    }
    var stream$=new Observable(producer)
    stream$.subscribe({
    next(value) {
        console.log(value)
    }
})
})
})

