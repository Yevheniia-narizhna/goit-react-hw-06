import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  selectContact,
  selectFilter,
} from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filteredContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul className={s.contactlist}>
        {filteredContact.map((item) => {
          return (
            <li key={item.id}>
              <Contact
                name={item.name}
                number={item.number}
                onDelete={() => dispatch(deleteContact(item.id))}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
