const {Observable}=require('rxjs');
const https=require('https')


const url='https://api.github.com/search/repositories?q=${текст запроса}'


https.get(url,(res)=>{
    res.setEncoding('utf-8')
    res.on('data',(d)=>{
        console.log('Запрос получен!')
        var producer=(observer)=>{
            observer.next(d)
            observer.error(/*'New error'*/)
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

