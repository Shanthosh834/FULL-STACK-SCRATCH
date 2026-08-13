/** 
TASK 3: Search Users (Hard)

WHAT TO BUILD:
- Fetch all users
- Search box at top
- Filter users by NAME as you type
- Show count of results
- Show name + email + city

API URL:
https://jsonplaceholder.typicode.com/users

HINT:
user.address.city ← for city!

EXPECTED OUTPUT:
Search: [Leanne      ]
Found: 1 users

Name: Leanne Graham
Email: Sincere@april.biz
City: Gwenborough
**/

import { useEffect, useState } from "react";

function SearchTask() {
const [result, setResult] = useState([]);
const [search, setSearch] = useState('');

useEffect(() => {
Search();
    }, []);

async function Search() {
try {
const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
if(!res.ok) {
throw new Error(res.status);
            }
const data = await res.json();

setResult(data);
        } catch(err) {
console.log(err.message);
        }
    };

const filtered = result.filter(post => post.name.toLowerCase().includes(search.toLowerCase()))

return (
<div>
            <input type="text"
value={search}
placeholder="Search Names ..."
onChange={(e) => setSearch(e.target.value)} />

            <p> Total Users {filtered.length} </p>

            {filtered.map(post => (
<div key={post.id}>
                    <p> Name: {post.name} </p>
                    <p> Email: {post.email} </p>
                    <p> City: {post.address.city} </p>
                </div>
            ))}
        </div>
    );
};

export default SearchTask;