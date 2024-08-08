import { getPages } from '../utils/getPages';

const PagesList = () => {
const pages = getPages();

return (
    <div className="p-8 text-white">
        <ul>
            {pages.map((page) => (
                <li key={page} className="mb-2">
                    <p>{page}</p>
                </li>
            ))}
        </ul>
    </div>
);
};

export default PagesList;
