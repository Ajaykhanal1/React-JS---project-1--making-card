import Card from './components/Card'

function App() {

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/braindigit.com",
    companyName: "BrainDigit",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$8/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://logo.clearbit.com/f1soft.com",
    companyName: "F1Soft International",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$10/hr",
    location: "Lalitpur, Nepal"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.kYK0aW1G3IKh7Li6TNmbpgAAAA?pid=Api&P=0&h=220",
    companyName: "Logical Tech",
    datePosted: "1 day ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$6/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://logo.clearbit.com/deerwalk.com",
    companyName: "Deerwalk (Saber Nepal)",
    datePosted: "7 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$12/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://logo.clearbit.com/ebpearls.com",
    companyName: "EB Pearls",
    datePosted: "2 days ago",
    post: "Node.js Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    payPerHour: "$9/hr",
    location: "Lalitpur, Nepal"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.tnBKLY2Fny67jD38H_SqUwHaHi?pid=Api&P=0&h=220",
    companyName: "Leapfrog Technology",
    datePosted: "4 days ago",
    post: "Python Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$11/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.Q7qvvG-nyEX8BuLM2r2vqQHaHa?pid=Api&P=0&h=220",
    companyName: "IntroCept",
    datePosted: "6 days ago",
    post: "Flutter Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$7/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://logo.clearbit.com/verscend.com",
    companyName: "Verscend Technologies",
    datePosted: "2 days ago",
    post: "Graphic Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$5/hr",
    location: "Lalitpur, Nepal"
  },
  {
    brandLogo: "https://logo.clearbit.com/cloudfactory.com",
    companyName: "CloudFactory",
    datePosted: "8 days ago",
    post: "SEO Specialist",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$8/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandLogo: "https://logo.clearbit.com/spiralogics.com",
    companyName: "Spiralogics",
    datePosted: "5 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$13/hr",
    location: "Kathmandu, Nepal"
  }
];


  console.log(jobOpenings);
  
  return (
  <div className="grid-container">
    {jobOpenings.map(function(elem,idx){

      return <div key={idx}>
              <Card company={elem.companyName} 
                  datePosted={elem.datePosted}
                  post={elem.post}
                  tag1={elem.tag1}
                  tag2={elem.tag2}
                  payPerHour={elem.payPerHour}
                  location={elem.location}
                  brandLogo={elem.brandLogo}/>
      </div>
    }
    )}

    
    </div>
  )
}

export default App
