import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, image, desc, price, rating } = menuItem;
        return (
          <div key={id} className='menu-item'>
            <img src={image} alt={title} className='photo' />
            <div className='item-info'>
              <div>
                <h4>{title}</h4>
                <p>
                  <div>
                    {
                      Array(rating)
                        .fill()
                        .map((_) => (
                          <i className="fa fa-star text-warning" />
                        ))
                    }
                  </div>
                </p>
                <h4 className='price'>${price}</h4>
              </div>
              <p className='item-text'>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
