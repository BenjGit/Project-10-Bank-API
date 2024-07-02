import { useDispatch, useSelector } from "react-redux"
import { updateUserThunk } from "../../features/authSlice";
import './style.css'
import { useEffect, useState } from "react";



const Profile = () => {
  const userData = useSelector((state) => state.auth.userData)
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token)
  const [editMode, setEditMode] = useState(false)
  const [firstName , setFirstName] = useState("")
  const [lastName , setLastName] = useState("")

  useEffect(() => {
    if(userData && userData.body) {
      if (!firstName) {
        setFirstName(userData.body.firstName);//initialiser les valeurs de base du nom et prénom pour afficher le nom et prénom sur la page avant les modif
      }
      if (!lastName) {
        setLastName(userData.body.lastName);
      }
    }
  }, [userData]);

  const updateProfile = async () => {
    setEditMode(true)
  };
  
  const handleSave = async (e) => {
    e.preventDefault();
    dispatch(updateUserThunk({token: token, firstName, lastName}));
    setEditMode(false);
  }

  const handleCancel = () => {
    !firstName ? setFirstName(userData.body.firstName) : setFirstName(userData.firstName)
    !lastName ? setLastName(userData.body.lastName) : setLastName(userData.lastName)

    setEditMode(false);
  }

    return (
    <main className="main bg-dark">
      <div className="header">
      { editMode ?
      <>
        <h1>Welcome back<br /></h1>
        <form className="edit-form" onSubmit={handleSave}>
          <div className="form-content">
              <input type="text" placeholder={firstName} onChange={(e) => (setFirstName(e.target.value))}/>
              <input type="text" placeholder={lastName} onChange={(e) => (setLastName(e.target.value))}/>
          </div>
          <div className="buttons">
            <button className="save-button" type="submit">Save</button>
            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </>  
      :    
      <>
        <h1>Welcome back<br />{firstName} {lastName}!</h1>
        <button className="edit-button" onClick={updateProfile}>Edit Name</button>
      </>
      }
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    )
}

export default Profile