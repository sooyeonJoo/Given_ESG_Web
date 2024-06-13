from django.db import models

class Comment(models.Model):
    content = models.CharField(max_length=500)
    wri_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content
