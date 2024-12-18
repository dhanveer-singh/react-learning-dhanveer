import Swal from 'sweetalert2';

const DeleteConfirmation = ({ onConfirmDelete, taskIndex }) => {
  const handleDeleteConfirmation = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this task?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirmDelete(taskIndex);
        Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
      }
    });
  };

  return (
    <button
      onClick={handleDeleteConfirmation}
      className='ml-2 px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400'
    >
      Delete
    </button>
  );
};

export default DeleteConfirmation;
