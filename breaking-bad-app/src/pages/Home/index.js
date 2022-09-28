import Masonry from "react-masonry-css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useEffect } from "react";
import "./style.css";

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const nextPage = useSelector((state) => state.characters.page);
  const error = useSelector((state) => state.characters.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <Link to={`/char/${character.char_id}`}>
              <img
                src={character.img}
                alt={character.name}
                className="character"
              />
              <div className="char_name">{character.name}</div>
            </Link>
          </div>
        ))}
      </Masonry>

      <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
        {status === "loading" && <Loading />}
        {hasNextPage && status !== "loading" && (
          <button onClick={() => dispatch(fetchCharacters(nextPage))}>
            Load more ({nextPage})
          </button>
        )}

        {!hasNextPage && <div>There is nothing to show</div>}
      </div>
    </div>
  );
};

export default Home;
