import React from 'react'
import { useParams } from 'react-router'
import './projects.css'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const SingleProject = () => {

    const { postId } = useParams();


    // const post = useSelector(state =>
    //     state.posts.find(post => post.id === postId)
    //   )
      const posts = useSelector(state => state.posts);

      const post = posts.filter((post) => post.id == postId);
    
      if (!post) {
        return (
          <section className='post'>
            <h2>Post not found!</h2>
          </section>
        )
      }
    
      return (
        <section>
          <article className="post">
              {post.map((pos, idx) =>{
                  const {id,img,heading,semiHeading,quot,para} = pos;
                  return (
                      <div className="post" key={id}>
                        <h1>{heading}</h1>
                        <img src={img} alt={heading} />
                        <h4>{semiHeading}</h4>
                        <p className="quot">{quot}</p>
                        <p className="para">{para}</p>
                        <Link to="/" className="Back-home">Home</Link>
                      </div>
                  )
              })}
          </article>
        </section>
      )


}

export default SingleProject
