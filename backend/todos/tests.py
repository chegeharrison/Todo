from django.test import TestCase
from .models import Todo

# Create your tests here.
class TodoModelTest(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Todo.objects.create(title='first Todo', description='a description here')
        
    def test_title_content(self):
        todo = Todo.objects.get(id=1)
        expected_object_name = f'{todo.title}'
        self.assertEqual(expected_object_name, 'first Todo')

    def test_description_content(self):
        todo = Todo.objects.get(id=1)
        expected_object_name = f'{todo.description}'
        self.assertEqual(expected_object_name, 'a description here')
        
    def test_completed_default(self):
        todo = Todo.objects.get(id=1)
        self.assertFalse(todo.completed)    