
const FeedBackReview = ({ feedBack }) => {
    console.log(feedBack);
    const { reviewId, name, userImg, review } = feedBack

    return (
        <div className="card bg-base-100 shadow-xl border">
            <div className="card-body">
                <div className="flex items-center justify-between gap-3">
                    <img className="w-14 h-14 rounded-full" src={userImg} alt="" />
                    <h2 className="card-title">{name}</h2>
                    <p className="text-right">{new Date().toLocaleDateString()}</p>
                </div>
                <p>{review}</p>

                <div className="card-actions items-center justify-end gap-6">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeedBackReview;