import "./AnimatedBG.css";

interface Props {
  title: string;
  description: string;
}

const AnimatedBG = ({ title, description }: Props) => {
  return (
    <div className="section_our_solution">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="our_solution_category">
            <div className="solution_cards_box">
              <div className="solution_card">
                <div className="hover_color_bubble"></div>
                <div className="solu_title">{title}</div>
                <p className="solu_description">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBG;
