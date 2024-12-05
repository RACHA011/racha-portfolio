const Image = async function () {
  try {
    const response = await fetch('http://localhost:5000/getprojects', { method: 'GET' });
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const projects = await response.json();
    console.log('Projects:', projects);
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};

export default Image;
