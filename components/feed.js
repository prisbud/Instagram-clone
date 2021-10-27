import Stories from "./stories";
import Posts from "./posts";
import MiniProfile from './MiniProfile'
import Suggestion from './Suggestions'

function Feed(){
    return(
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:mx-w-6xl mx-auto">
       <section className="col-span-2">
           {/*Stories*/}
           <Stories />
          
           {/* Posts */}
           <Posts />
       </section>
       <section className="col-span-1 hidden xl:inline-grid md:col-span-1">
           <div className="fixed">
           {/** mini profile */}
           <MiniProfile />
           {/** Suggestions */}
           <Suggestion />
           </div>
       </section>
       </main>
    )
}

export default Feed