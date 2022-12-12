---
---

{% include js/base.js %}
{%- if site.enableNotification == true -%}
  {% include js/notification.js %}
{%- endif -%}
{%- if site.enableToast == true -%}
  {% include js/toast.js %}
{%- endif -%}

// Must be last due to error
{% include js/updateLinkTargets.js %}
