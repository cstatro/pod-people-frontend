const SearchResultCard = props => {
  const { artistName } = props;
  return (
    <div>
      <h3>{artistName}</h3>
    </div>
  );
};

export default SearchResultCard;
