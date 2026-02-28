export const serverUrl = import.meta.env.VITE_SERVER_URL;

export const serviceSignup = async (data) => {
    const response = await fetch(`${serverUrl}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return response.json();
}

export const serviceAddProjects = async (data) => {
    const response = await fetch(`${serverUrl}/admin/add-projects`, {
        method: "POST",
        body: data
    })
    return response.json();
}

export const serviceGetProjects = async () => {
    const response = await fetch(`${serverUrl}/`)
    return response.json();
}

export const deleteServerProject = async (id) => {
    const response = await fetch(`${serverUrl}/admin/add-projects/${id}`, {
        method: 'DELETE'
    })
    return response.json();
}

export const updateServerProject = async (id) => {
    const response = await fetch(`${serverUrl}/admin/add-projects/${id}`, {
        method: 'GET',
    })
    return response.json();
}

export const updateProjectServer = async (data, id) => {
    console.log("Data from serviceAddProjects", data, id);
    const response = await fetch(`${serverUrl}/admin/update/${id}`, {
        method: "PUT",
        body: data
    })
    return response.json();
}

export const serviceLogin = async (data) => {
    const response = await fetch(`${serverUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(data)
    })
    return response.json();
}

export const serviceLogout = async () => {
    const response = await fetch(`${serverUrl}/logout`,
        {
            method: 'POST',
            credentials: 'include'
        }
    )
    return response.json();
}

export const fetchUser = async () => {
    const res = await fetch(`${serverUrl}/checkauth`, {
        method: 'GET',
        credentials: 'include'
    })
    const result = await res.json();
    return result;
}

export const fetchOneProject = async (id) => {
    const res = await fetch(`${serverUrl}/admin/project/${id}`)
    const result = await res.json();
    return result;
}