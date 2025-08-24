
export const serviceSignup = async (data) => {
    const response = await fetch('http://localhost:3000/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return response.json();
}

export const serviceAddProjects = async (data) => {
    console.log("Data from serviceAddProjects", data);
    const response = await fetch('http://localhost:3000/admin/add-projects', {
        method: "POST",
        body: data
    })
    console.log("Response from services", response);
    return response.json();
}

export const serviceGetProjects = async () => {
    const response = await fetch('http://localhost:3000/')
    return response.json();
}

export const deleteServerProject = async (id) => {
    const response = await fetch(`http://localhost:3000/admin/add-projects/${id}`, {
        method: 'DELETE'
    })
    return response.json();
}

export const updateServerProject = async (id) => {
    const response = await fetch(`http://localhost:3000/admin/add-projects/${id}`, {
        method: 'GET',
        headers: 'application/json',
    })
    return response.json();
}

export const updateProjectServer = async (data, id) => {
    console.log("Data from serviceAddProjects",data, id);
    const response = await fetch(`http://localhost:3000/admin/update/${id}`, {
        method: "PUT",
        body: data
    })
    return response.json();
}

export const serviceLogin = async (data) => {
    const response = await fetch('http://localhost:3000/login', {
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
    const response = await fetch('http://localhost:3000/logout',
        {
            method: 'POST'
        }
    )
    return response.json();
}