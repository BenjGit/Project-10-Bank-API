const BASE_API_URL = 'http://localhost:3001/api/v1'

export const login = async ({email, password}) => {
    console.log(password)
    try {
        const response = await fetch(`${BASE_API_URL}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // données envoyées au format json
            },
            body: JSON.stringify({email, password}),
        });
        // Vérification de la réponse
        if (!response.ok) {
            throw new Error('Erreur lors de la requête de connexion'); // Gérer les erreurs de réponse HTTP
        }
    
        const result = await response.json();
        return result;
    }
    catch (error) {
        console.error('Erreur de connexion:', error);
        throw error; // Lancer l'erreur pour la gérer où la fonction est appelée
    }
};

export const fetchUserProfile = async (token) => {
    try {
        const response = await fetch(`${BASE_API_URL}/user/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la requête de connexion');
        }
        const result = await response.json();
        return result;
    }
    catch (error) {
        console.error('Erreur de connexion:', error);
        throw error; 
    }
}

export const updateUserProfile = async ({token, firstName, lastName}) => {
    console.log(token)
    try {
        const response = await fetch(`${BASE_API_URL}/user/profile`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,       
        },
        body: JSON.stringify({firstName:firstName, lastName:lastName}),
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la requête de connexion');
        }
        const result = await response.json();
        return result;
    }
    catch (error) {
        console.error('Erreur de connexion:', error);
        throw error; 
    }
}