import './Filter.css'

export default function Filter(props){
    const filter = (p) => {
        let jobs = document.querySelectorAll(".job__listing");
        jobs.forEach(function(item){
            item.classList.remove('active')
            item.classList.remove('hidden')
        })
        let filteredJobs = [];
        let target = p.target.classList[1]
        let selected = document.querySelectorAll('[data-languages]');
        for(var i=0; i<selected.length; i++){
            let stringy = selected[i].dataset.languages
            if(stringy.includes(target)){
                filteredJobs.push(selected[i])
            }
        }        
        for (let i = 0; i < jobs.length; i++) {
            jobs[i].classList.add("hidden");
        }
        filteredJobs.forEach(function (item) {
            item.classList.add("active");
            item.classList.remove("hidden");
            item.style.display='flex'
        });
        setTimeout(()=>{
            let hideThese = document.querySelectorAll('.hidden')
            for(let i=0;i<hideThese.length;i++){
                hideThese[i].style.display='none'
            }
        }, 400)
    }

    const clear = (p)=>{
        let jobs = document.querySelectorAll(".job__listing");
        jobs.forEach(function(item){
            item.style.display='flex'
            setTimeout(()=>{item.classList.remove('active')
            item.classList.remove('hidden')}, 400)
        })
    }

    return(
        <div className="filter__bar">
            <p>Filter by tech:</p>
            <div className="tag__filter">
                <a onClick={filter} className='tag HTML'>HTML</a>
                <a onClick={filter} className='tag CSS'>CSS</a>
                <a onClick={filter} className='tag JavaScript'>JavaScript</a>
                <a onClick={filter} className='tag Python'>Python</a>
                <a onClick={filter} className='tag Ruby'>Ruby</a>
            </div>
            <a onClick={clear} className="tag clear">Clear</a>
        </div>
    )
}