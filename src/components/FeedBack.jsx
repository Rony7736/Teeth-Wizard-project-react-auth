import FeedBackReview from "./FeedBackReview";

const FeedBack = ({ feedBackData }) => {
    // console.log(feedBackData);

    return (
        <div className="grid grid-cols-3 gap-6 my-6">
            {
                feedBackData.map(feedBack => <FeedBackReview key={feedBack.id} feedBack={feedBack}></FeedBackReview>)
            }
        </div>
    );
};

export default FeedBack;