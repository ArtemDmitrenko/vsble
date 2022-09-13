import { ReactComponent as ChevronDown } from 'assets/img/chevron-down.svg';

import './sales-statement.scss';

function SalesStatement({ data }) {
  const handleMenuClick = (e) => {
    const { target } = e;
    const menu = target.closest('button');
    const panel = menu.nextElementSibling;
    styleElements(menu, panel);
  };

  const styleElements = (menu, panel) => {
    menu.classList.toggle('sales-statement_active');
    menu.classList.toggle('sales-statement_hidden');
    panel.style.maxHeight = panel.style.maxHeight
      ? null
      : panel.scrollHeight + 'px';
  };

  return (
    <>
      <h2 className="sales-statement__title">Sales Statements</h2>
      {data ? (
        <ul className="sales-statement__main-list">
          {data.map(({ year, sales }) => (
            <li key={year} className="sales-statement__wrapper">
              <button
                className="sales-statement sales-statement_hidden"
                onClick={handleMenuClick}
              >
                <div className="sales-statement__year">
                  <span className="sales-statement__arrow">
                    <ChevronDown />
                  </span>
                  <p className="sales-statement__year-text">{year}</p>
                </div>
                <p className="sales-statement__sales-amount">{`${
                  sales.length
                } ${sales.length === 1 ? 'sale' : 'sales'}`}</p>
              </button>
              <ul className="sales-statement__list">
                {sales.map(({ date, price, currency }) => (
                  <li key={date} className="sales-statement__list-item">
                    <p className="sales-statement__data">{date}</p>
                    <div className="sales-statement__price-block">
                      <p className="sales-statement__price">
                        {`${currency}${price}`}
                      </p>
                      <button className="sales-statement__invoice">
                        Download invoice
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p className="sales-statement__no-data">
          Sorry, you don't have sales yet
        </p>
      )}
    </>
  );
}

export default SalesStatement;
