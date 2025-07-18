// import "./rowPoster.scss";
// import { useDispatch } from "react-redux";
// import {  FaPlay, FaChevronDown } from "react-icons/fa";
//  import { showModalDetail } from "../../redux/modal/modal.actions";
// import { Link } from "react-router-dom";

// const RowPoster = ( result ) => {
// 	const { item, item: { title, original_name, original_title, name, genre_ids }, isFavourite ,index } = result;
// 	let fallbackTitle = title || original_title || name || original_name;
// 	const dispatch = useDispatch();

// 	const handleModalOpening = () => {
	
// 		dispatch(showModalDetail({ ...item, fallbackTitle, genresConverted, isFavourite }));
// 	}
// 	const handlePlayAction = event => {
// 		event.stopPropagation();

// 	};
// 	return (
// 		<div
// 			className={`Row__poster`}
// 		//onClick={handleModalOpening}
// 		>

// 			<img src={`${result.item?.images[0]}`}  alt={result.item?.title} />	 

// 			<div className="Row__poster-info">
// 				<div className="Row__poster-info--iconswrp">
// 					<Link
// 						className="Row__poster-info--icon icon--play"
// 						onClick={handlePlayAction}
// 						to={'/play'}
// 					>
// 						<FaPlay />
// 					</Link>
// 					<button className='Row__poster-info--icon icon--toggleModal'>
// 						<FaChevronDown onClick={handleModalOpening}/>
// 					</button>
// 				</div>
// 				<div className="Row__poster-info--title">
// 					<h3>{result.item?.title}</h3>
// 				</div>
				
// 			</div>
// 		</div>
// 	);
// };

// export default RowPoster;


import "./rowPoster.scss";
import { useDispatch } from "react-redux";
import { showModalDetail } from "../../redux/modal/modal.actions";
import { Link } from "react-router-dom";
 import {  FaPlay, FaChevronDown } from "react-icons/fa";

const RowPoster = result => {
	const {  item: { title, original_name, original_title, name,  poster_path, backdrop_path }, isLarge } = result;
	let fallbackTitle = title || original_title || name || original_name;
	const dispatch = useDispatch();
	const handleModalOpening = () => {
		dispatch(showModalDetail({ ...result.item, fallbackTitle,}));
	}
	const handlePlayAction = event => {
		event.stopPropagation();

	};

	return (
		<div
			className={`Row__poster ${isLarge && "Row__poster--big"}`}
			onClick={handleModalOpening}
		>
			{isLarge ? (
				poster_path ? (
					<img src={`${result.item?.images[0]}`} alt={fallbackTitle}  />
				) : ""
			) : backdrop_path ? (
				<img src={`${result.item?.images[0]}`} alt={fallbackTitle} />
			) : (
				<>
					<img src={`${result.item?.images[0]}`} alt={fallbackTitle} />
					<div className="Row__poster__fallback">
						<span>{fallbackTitle}</span>
					</div>
				</>
			)}
			<div className="Row__poster-info">
			{result?.item.type === "property" && (
  <div className="Row__poster-info--iconswrp">
    <Link
      className="Row__poster-info--icon icon--play"
      onClick={handlePlayAction}
      to="/play"
    >
      <FaPlay />
    </Link>

    <button className="Row__poster-info--icon icon--toggleModal">
      <FaChevronDown onClick={handleModalOpening} />
    </button>
  </div>
)}
				<div className="Row__poster-info--title">
					<h3>{fallbackTitle}</h3>
				</div>
				<div className="Row__poster-info--genres">
					{/* {genresConverted && genresConverted.map(genre => (
						<span key={`Genre--id_${genre}`} className="genre-title">{genre}</span>
					))} */}
				</div>
			</div>
		</div>
	);
};

export default RowPoster;