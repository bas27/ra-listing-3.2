interface Image {
  url_570xN: string;
}

interface Item {
  listing_id: number;
  url: string;
  MainImage?: Image;
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
}

interface ListingProps {
  items: Item[];
}

const LENGTH_TITLE = 50;

export const Listing: React.FC<ListingProps> = ({ items = [] }) => {

  const renderImage = (image?: Image) => (image ? <img src={image.url_570xN} /> : <></>);

  const getTitle = (title?: string) => (
    title ?
      title.length > LENGTH_TITLE
        ? `${title.substring(0, LENGTH_TITLE)}...`
        : title
      : null
  );

  const renderPrice = (item: Item) => {
    return (
      <p className='item-price'>
        {item.currency_code === 'USD' ? '$' : item.currency_code === 'EUR' ? '€' : null}
        {item.price}
        {item.currency_code !== 'USD' && item.currency_code !== 'EUR' ? ' GBP' : null}
      </p>
    )
  };

  const renderQuantity = (quantity: number) => {

    const className = `item-quantity level-${quantity <= 10 ? 'low' : quantity > 20 ? 'high' : 'medium'
      }`;
    return (
      <p className={className}>{quantity} left</p>
    )
  };

  return (
    <div className='item-list'>
      {items.length !== 0
        ?
        items.map((item) => {
          return (item.price && item.title) ? (
            <div key={item.listing_id} className='item' >
              <div className='item-image' >
                <a href={item.url}>
                  {renderImage(item.MainImage)}
                </a>
              </div>
              <div className='item-details'>
                <p className='item-title'>{getTitle(item.title)}</p>
                {renderPrice(item)}
                {renderQuantity(item.quantity || 0)}
              </div>
            </div>
          ) : null
        })
        : null}
    </div>
  )
}

export default Listing;