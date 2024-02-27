import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import './accordion.scss';

const Accordion = (prop) => {
  const [accordionItems, setAccordionItems] = useState([]);
  const { data } = prop;

  useEffect(() => {
    let accordion = [];

    data.forEach((i) => {
      accordion.push({
        title: i.title,
        content: i.content,
        open: false,
        question: i.question
      });
    });

    setAccordionItems(accordion);
  }, [data]);

  const click = (i) => {
    const newAccordion = [...accordionItems];
    const index = newAccordion.indexOf(i);

    newAccordion[index].open = !newAccordion[index].open;
    setAccordionItems(newAccordion);
  };

  return (
    <div className="accordion">
      { accordionItems.map((i) => (
        <div className='accordionItem' key={ accordionItems.indexOf(i) }>
          <div
            className={ i.open ? "title active" : "title" }
            onClick={ () => click(i) }
          > <span className="title-text">
              { i.question }
            </span>
            <div className="arrow-wrapper">
              {
                !i.open
                  ? <ExpandMore sx={ { color: "#fff", fontSize: "52px", backgroundColor: "#BBA664", borderRadius: "10px" } } />
                  : <ExpandLess sx={ { color: "#fff", fontSize: "52px", backgroundColor: "#BBA664", borderRadius: "10px" } } />
              }
            </div>
          </div>
          <div className={ i.open
            ? "content content-open"
            : "content" }
          >
            <div className={ i.open
              ? "content-text content-text-open"
              : "content-text" }
            > { i.content }
            </div>
          </div>
        </div>
      )) }
    </div>
  );
};
Accordion.prototype = {
  prop: PropTypes.node
}

export default Accordion;