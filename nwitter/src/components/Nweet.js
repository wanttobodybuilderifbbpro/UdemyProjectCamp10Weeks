import React, { useState } from "react";
import { dbService } from "fBase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure want to delete this nweet?");
    if (ok) {
      await deleteDoc(doc(dbService, `nweets/${nweetObj.id}`));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await updateDoc(doc(dbService, `nweets/${nweetObj.id}`), {
      text: newNweet,
    });
    setEditing(false);
  };

  const onChange = (event) => {
    const { value } = event.target;
    setNewNweet(value);
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your nweet"
              value={newNweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Nweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
