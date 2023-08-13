import './Listing.css'
import Image from 'next/image'

/*const filter = (p) => {
  let selected = document.querySelectorAll("." + p.target.className);
  let jobs = document.querySelectorAll(".job-card");
  for (let i = 0; i < jobs.length; i++) {
    jobs[i].classList.add("hidden");
  }
  selected.forEach(function (item) {
    item.parentElement.parentElement.classList.add("active");
    item.parentElement.parentElement.classList.remove("hidden");
  });
};*/

export default function Listing(props) {
  var dataLanguages = props.languages.toString();
  dataLanguages = dataLanguages.replace(/,/g, ' ')
  // console.log(dataLanguages)
    return (
      <div data-languages={dataLanguages} className={`job__listing ${props.featured ? 'featured' : ''}`}>
        <div className="company__avatar">
            <Image width='70' height='70' src={props.logo} alt="" />
        </div>
        <div className="job__details">
          <div className="author">
            <h4 className="company__name">
              {props.company}
            </h4>
            <div className="tags__nf">
              {props.new === true && 
              <p className="tag tag__new">New!</p>
              }
              {props.featured === true &&
              <p className="tag tag__featured">Featured</p>
              }
            </div>
          </div>
          <p className="job__title">{props.position}</p>
          <div className="location">
            <p className="date">{props.postedAt}</p>
            <p className="time">{props.contract}</p>
            <p className="region">{props.location}</p>
          </div>
        </div>
        <div className="job__tags">
        {props.languages.map((a)=>(
          <a key={Math.random()} className="tag">{a}</a>
        ))}
        </div>
      </div>
    )
}