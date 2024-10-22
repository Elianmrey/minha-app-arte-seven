import { useEffect } from 'react'
import StyleContrib from './Contributions.module.css'
import PropTypes from 'prop-types'
import StarRating from '../StarsRating/StarsRating'


export default function UsersContributions({ contributionVector })
{
    useEffect(
        () => { },[contributionVector]
  )
    return (
        
        <div className={StyleContrib.container}>

            <div className={StyleContrib.contributionsTitle}>
                <h2>Avaliações: </h2>
            </div>

            <div className={StyleContrib.contributionsPanel}>
                
            {contributionVector.map((contribution, index) => {
                return (
                    <div key={index} className={StyleContrib.contributionContainer}>
                        
                        <div className={StyleContrib.authorContainer}>
                    
                            <span className={StyleContrib.contributionAuthor}>
                       <strong>@{contribution.author} </strong>▸▸▸  {contribution.date}
                    </span>
                        </div>
                        <div className={StyleContrib.personalRating}>
                           <span>Nota:</span> {<StarRating voteAverage={contribution.note} />}
                        </div>
                        <span className={StyleContrib.contributionText}>
                            {contribution.description}
                    </span>
                        <div className={StyleContrib.LikeContainer}>
                            <span className={StyleContrib.Like}> {contribution.likesAmount}</span>
                            <svg className={StyleContrib.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z" />
                            </svg>

                            
                            <span className={StyleContrib.Like}>|</span>

                            <svg className={StyleContrib.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                            </svg>
                            <span className={StyleContrib.Like}>{contribution.shareAmount}</span>
                        </div> 
                    </div>)
            })}
            </div>
        </div>
    )
}
 
UsersContributions.propTypes = {
    contributionVector: PropTypes.arrayOf(PropTypes.object),
    
}