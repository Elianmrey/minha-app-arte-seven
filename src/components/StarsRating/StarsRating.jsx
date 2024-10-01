import StarsStyle from './StarsRating.module.css'
import PropTypes from 'prop-types';

export default function StarRating({ voteAverage }) {
    const rating = (voteAverage / 2);
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    const stars = [];

   
    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={i}>&#9733;</span>);
    }

 
    if (hasHalfStar) {
        stars.push(<span key="half">&#9733;</span>);
    }

   
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<span key={`empty-${i}`}>&#9734;</span>);
    }

    return <div className={StarsStyle.Container }>{stars}</div>;
};

StarRating.propTypes = {
    voteAverage: PropTypes.number.isRequired,
};


