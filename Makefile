.ONESHELL:
.SILENT:

define docker-compose-run
	docker-compose run --rm $(1) && exit_status=$$? || exit_status=$$?
	[ "$$exit_status" -ne 0 ] && docker-compose ps && docker-compose logs
	docker-compose down -v
	(exit $$exit_status)
endef

run:
	$(call docker-compose-run, app)
.PHONY: run
