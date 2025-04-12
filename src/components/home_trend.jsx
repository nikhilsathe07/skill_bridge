const Home_trend=()=>{

    return(
        <>
            <div className='trend'>
                <h1 className='trendHead'>Trending now !</h1>
                <div className='underline'></div>
                <div className="trendGrid">
                    <div className="gridBox">
                        <h1>ChatGPT is a top skill</h1>
                        <p>See ChatGPT Courses  ˃</p>
                        <span>4,358,362 learners</span>
                        <button>Show all Trending skills  ↝</button>
                    </div>
                    <div className="gridBox">
                        <h2>Development</h2>
                        <p>Python ˃<br /><span>47,849,855 learners</span></p>
                        <p>Web Development ˃<br /><span>4,89,495 learners</span></p>
                        <p>Data Science ˃<br /><span>39,449,709 learners</span></p>
                    </div>
                    <div className="gridBox">
                        <h2>Design</h2>
                        <p>Blender ˃<br /><span>47,849,855 learners</span></p>
                        <p>Graphic Design ˃<br /><span>4,89,495 learners</span></p>
                        <p>User Experience (UX) Design ˃<br /><span>8,449,709 learners</span></p>
                    </div>
                    <div className="gridBox">
                        <h2>Business</h2>
                        <p>PMI Project Management Professional (PMP) ˃<br /><span>47,849,855 learners</span></p>
                        <p>Microsoft Power BI ˃<br /><span>76,89,495 learners</span></p>
                        <p>Project Management ˃<br /><span>2,449,709 learners</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home_trend