import {Link} from 'react-router-dom';
export const ProductCard = ({title, image, desc, price, id}) => {
    const detailsLink = `/product/${id}`;
    return (
        <div class="container">
            <div class="card">
                <img src={image} alt={title} />
                <div class="card-body">
                    <div class="row">
                        <div class="card-title">
                            <h4>{title}</h4>
                            <h3>${price}</h3>
                        </div>
                        <div class="view-btn">
                            <Link to={detailsLink}>View Details</Link>
                        </div>
                    </div>
                    <hr />
                    <p>
                        {desc}
                    </p>
                    <div class="btn-group">
                        <div class="btn">
                            <a href="">Buy Now</a>
                        </div>
                        <a href=""> Cancel</a>
                    </div>
                </div>
            </div>
        </div>
    )
}