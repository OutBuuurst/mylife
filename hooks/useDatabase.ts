import {enablePromise, openDatabase, SQLiteDatabase} from 'react-native-sqlite-storage';
import Memory from "@/models/memory";
import Contact from "@/models/contact";






export const getDBConnection = async () => {
    enablePromise(true);
    return openDatabase({name: 'mylife.db', location: 'Library'});
};

export const createTables = async (db: SQLiteDatabase) => {
    // create table if not exists
    const table1Query = `CREATE TABLE IF NOT EXISTS MEMORIES (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
    updatedAt TEXT DEFAULT CURRENT_TIMESTAMP,
    content TEXT,
    coordinates TEXT 
);`;

    const table2Query = `CREATE TABLE IF NOT EXISTS EMOJIS (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    unicode TEXT,
    category TEXT 
);`

    const table3Query = `CREATE TABLE IF NOT EXISTS GROUPS (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT);`


    const table4Query = `CREATE TABLE IF NOT EXISTS CONTACTS (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    phone TEXT,
    email TEXT,
    website TEXT,
    instagram TEXT,
    birthday DATE,
    homeAddress TEXT,
    profession TEXT,
    businessAddress TEXT,
    faith TEXT,
    group_id INTEGER,
    FOREIGN KEY (group_id) REFERENCES GROUPS(id)
);`

    const table5Query = `CREATE TABLE IF NOT EXISTS memories_contacts (
    memory_id INTEGER,
    contact_id INTEGER,
    PRIMARY KEY (memory_id, contact_id),
    FOREIGN KEY (memory_id) REFERENCES MEMORIES(id),
    FOREIGN KEY (contact_id) REFERENCES CONTACTS(id)
);`

    const table6Query = `CREATE TABLE IF NOT EXISTS memories_emojis (
    memory_id INTEGER,
    emoji_id INTEGER,
    PRIMARY KEY (memory_id, emoji_id),
    FOREIGN KEY (memory_id) REFERENCES MEMORIES(id),
    FOREIGN KEY (emoji_id) REFERENCES EMOJIS(id)
);`

    try {
        await db.executeSql(table1Query);
        await db.executeSql(table2Query);
        await db.executeSql(table3Query);
        await db.executeSql(table4Query);
        await db.executeSql(table5Query);
        await db.executeSql(table6Query);
    }
   catch (e) {
       console.error(e)
   }
   return ' created';
};


export const createMemory = async (createdAt:string, updatedAt:string,content:string, coordinates:string): Promise<Memory> => {
    const db = await getDBConnection();
    try {
        const result = await db.executeSql(
            'INSERT INTO MEMORIES (createdAt, updatedAt,content, coordinates) VALUES (?, ?, ?, ?)',
            [createdAt, updatedAt,content, coordinates]
        );
        // @ts-ignore
        const insertedId = result[0].insertId;
        return new Memory(insertedId, createdAt, updatedAt, content, coordinates);
    } catch (e) {
        console.error(e);
        throw e;
    }
};


export const getMemoryById = async (id: number): Promise<Memory | null> => {
    const db = await getDBConnection();
    try {
        const result = await db.executeSql('SELECT * FROM MEMORIES WHERE id = ?', [id]);
        if (result[0].rows.length > 0) {
            const memoryData = result[0].rows.item(0);
            return new Memory(
                memoryData.id,
                memoryData.createdAt,
                memoryData.updatedAt,
                memoryData.content,
                memoryData.coordinates
            );
        }
        return null;
    } catch (e) {
        console.error(e);
        throw e;
    }
};


export const getAllMemories = async (): Promise<Memory[]> => {
    const db = await getDBConnection();
    try {
        const result = await db.executeSql('SELECT * FROM MEMORIES');
        const memories: Memory[] = [];
        for (let i = 0; i < result[0].rows.length; i++) {
            const memoryData = result[0].rows.item(i);
            memories.push(new Memory(
                memoryData.id,
                memoryData.createdAt,
                memoryData.updatedAt,
                memoryData.content,
                memoryData.coordinates
            ));
        }
        return memories;
    } catch (e) {
        console.error(e);
        throw e;
    }
};


export const updateMemory = async (memory: Memory): Promise<void> => {
    const db = await getDBConnection();
    try {
        await db.executeSql(
            'UPDATE MEMORIES SET content = ?, coordinates = ?, updatedAt = ? WHERE id = ?',
            [memory.content, memory.coordinates, new Date(), memory.id]
        );
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export const deleteMemory = async (id: number): Promise<void> => {
    const db = await getDBConnection();
    try {
        await db.executeSql('DELETE FROM MEMORIES WHERE id = ?', [id]);
    } catch (e) {
        console.error(e);
        throw e;
    }
};



export const createContact = async (contact: Contact): Promise<Contact> => {
    const db = await getDBConnection();
    try {
        const result = await db.executeSql(
            'INSERT INTO CONTACTS (firstName, lastName, phone, email, website, instagram, birthday, homeAddress, profession, businessAddress, faith, group_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [contact.firstName, contact.lastName, contact.phone, contact.email, contact.website, contact.instagram, contact.birthday, contact.homeAddress, contact.profession, contact.businessAddress, contact.faith, contact.groupId]
        );
        // @ts-ignore
        const insertedId = result[0].insertId;
        return new Contact(insertedId, contact.firstName, contact.lastName, contact.phone, contact.email, contact.website, contact.instagram, contact.birthday, contact.homeAddress, contact.profession, contact.businessAddress, contact.faith, contact.groupId);
    } catch (e) {
        console.error(e);
        throw e;
    }
};





export const getContactById = async (id: number): Promise<Contact | null> => {
    const db = await getDBConnection();
    try {
        const result = await db.executeSql('SELECT * FROM CONTACTS WHERE id = ?', [id]);
        if (result[0].rows.length > 0) {
            const contactData = result[0].rows.item(0);
            return new Contact(
                contactData.id,
                contactData.firstName,
                contactData.lastName,
                contactData.phone,
                contactData.email,
                contactData.website,
                contactData.instagram,
                contactData.birthday,
                contactData.homeAddress,
                contactData.profession,
                contactData.businessAddress,
                contactData.faith,
                contactData.group_id
            );
        }
        return null;
    } catch (e) {
        console.error(e);
        throw e;
    }
};



export const getAllContacts = async (): Promise<Contact[]> => {
    const db = await getDBConnection();
    try {
        const result = await db.executeSql('SELECT * FROM CONTACTS');
        const contacts: Contact[] = [];
        for (let i = 0; i < result[0].rows.length; i++) {
            const contactData = result[0].rows.item(i);
            contacts.push(new Contact(
                contactData.id,
                contactData.firstName,
                contactData.lastName,
                contactData.phone,
                contactData.email,
                contactData.website,
                contactData.instagram,
                contactData.birthday,
                contactData.homeAddress,
                contactData.profession,
                contactData.businessAddress,
                contactData.faith,
                contactData.group_id
            ));
        }
        return contacts;
    } catch (e) {
        console.error(e);
        throw e;
    }
};


export const updateContact = async (contact: Contact): Promise<void> => {
    const db = await getDBConnection();
    try {
        await db.executeSql(
            'UPDATE CONTACTS SET firstName = ?, lastName = ?, phone = ?, email = ?, website = ?, instagram = ?, birthday = ?, homeAddress = ?, profession = ?, businessAddress = ?, faith = ?, group_id = ? WHERE id = ?',
            [contact.firstName, contact.lastName, contact.phone, contact.email, contact.website, contact.instagram, contact.birthday, contact.homeAddress, contact.profession, contact.businessAddress, contact.faith, contact.groupId, contact.id]
        );
    } catch (e) {
        console.error(e);
        throw e;
    }
};


export const deleteContact = async (id: number): Promise<void> => {
    const db = await getDBConnection();
    try {
        await db.executeSql('DELETE FROM CONTACTS WHERE id = ?', [id]);
    } catch (e) {
        console.error(e);
        throw e;
    }
};
