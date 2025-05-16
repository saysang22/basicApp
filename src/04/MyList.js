import MyListData from './MyListData.json';
import MyListItem from './MyListItem';

export default function MyList() {
    console.log(MyListData);

    const tags = MyListData.map((item, idx) => {
        return  <MyListItem title = {item.title} content = {item.content} />
    });
  return (
    <div className='w-full grid grid-cols-2 gap-4'>
        {tags}
    </div>
  )
}
